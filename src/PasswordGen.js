import React, { useState, useEffect, useRef } from "react";
import Button from "./Components/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PasswordGen() {
    const inputRef = useRef(null);

    const otpLen = Array.from({ length: 60 }, (_, i) => i + 6);

    const [settings, setSettings] = useState({
        length: otpLen[4],
        allowNumbers: true,
        allowUpperCase: true,
        allowLowerCase: true,
        allowSymbols: true,
    });

    const [password, setPassword] = useState("Click the button to generate a strong password");
    const [passwordGenerated, setPasswordGenerated] = useState(false);

    const handleCheckboxChange = (e) => {
        const { id, checked } = e.target;
        setSettings((prev) => ({ ...prev, [id]: checked }));
    };

    const genPassword = () => {
        const charSets = {
            allowNumbers: "0123456789",
            allowUpperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            allowLowerCase: "abcdefghijklmnopqrstuvwxyz",
            allowSymbols: "!@#$%^&*()_+-=[]{}|;:<>?",
        };

        let allowedChars = Object.entries(charSets)
            .filter(([key]) => settings[key])
            .map(([, value]) => value)
            .join("");

        if (!allowedChars) {
            setPassword("Select at least one character type!");
            setPasswordGenerated(false);
            return;
        }

        const newPassword = Array.from({ length: settings.length }, () =>
            allowedChars.charAt(Math.floor(Math.random() * allowedChars.length))
        ).join("");

        setPassword(newPassword);
        setPasswordGenerated(true);
    };

    useEffect(() => {
        if (passwordGenerated && inputRef.current) {
            inputRef.current.select();
            navigator.clipboard.writeText(password).then(() => {
                toast.success("Password copied to clipboard! 🎉", {
                    position: "top-right",
                    autoClose: 800,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    theme: "light",
                });
            }).catch(err => console.error("Failed to copy:", err));
        }
    }, [passwordGenerated]);

    return (
        <div className="main-div">
            <div className="sec-one">
                <div className="header-div">
                    <span className="main-title">ADI's PASSWORD</span>
                </div>
                <div className="input-text">
                    <input
                        type="text"
                        placeholder="Click the button to generate a strong password"
                        className="text-pswd"
                        readOnly
                        value={password}
                        ref={inputRef}
                    />
                </div>
            </div>

            <div className="btn-position">
                <Button btnName="Generate Random Password" genPassword={genPassword} />
            </div>

            <div className="legend-style">
                <fieldset>
                    <legend>Settings</legend>

                    <div className="settings-container">
                        <div className="settings-row">
                            <SettingItem label="Password length">
                                <select
                                    className="cursor drop-down"
                                    value={settings.length}
                                    onChange={(e) => setSettings({ ...settings, length: Number(e.target.value) })}
                                >
                                    {otpLen.map((len) => (
                                        <option key={len} value={len}>{len}</option>
                                    ))}
                                </select>
                            </SettingItem>
                            <CheckboxSetting
                                id="allowNumbers"
                                label="Allow Numbers (123)"
                                checked={settings.allowNumbers}
                                onChange={handleCheckboxChange}
                            />
                        </div>

                        <div className="settings-row">
                            <CheckboxSetting
                                id="allowUpperCase"
                                label="Allow Uppercase (ABC)"
                                checked={settings.allowUpperCase}
                                onChange={handleCheckboxChange}
                            />
                            <CheckboxSetting
                                id="allowLowerCase"
                                label="Allow Lowercase (abc)"
                                checked={settings.allowLowerCase}
                                onChange={handleCheckboxChange}
                            />
                        </div>

                        <div className="settings-row">
                            <CheckboxSetting
                                id="allowSymbols"
                                label="Allow Special Characters (!@#)"
                                checked={settings.allowSymbols}
                                onChange={handleCheckboxChange}
                            />
                        </div>
                    </div>
                </fieldset>
            </div>
            <ToastContainer  />
        </div>
    );
}

const SettingItem = ({ label, children }) => (
    <div className="setting-item">
        {label}
        {children}
    </div>
);

const CheckboxSetting = ({ id, label, checked, onChange }) => (
    <div className="setting-item">
        {label}
        <input type="checkbox" className="checkbox" id={id} onChange={onChange} checked={checked} />
        <label htmlFor={id} className="custom-checkbox"></label>
    </div>
);

export default PasswordGen;
