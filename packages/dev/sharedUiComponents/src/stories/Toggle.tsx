import  "./Toggle.css";

import toggleOnIcon_30px from "../imgs/toggleOnIcon_30px.svg";
import toggleMixedIcon_30px from "../imgs/toggleMixedIcon_30px.svg";
import toggleOffIcon_30px from "../imgs/toggleOffIcon_30px.svg";
import { Icon } from "./Icon";

const Icons = {
        on: toggleOnIcon_30px,
        mixed: toggleMixedIcon_30px,
        off: toggleOffIcon_30px,
};

export interface IToggleProps {
    toggled: "on" | "mixed" | "off";
    onToggle?: () => void;
    padded?: boolean;
    color?: "dark" | "light";
}

export function Toggle({color = "dark", toggled = "off", padded = false, onToggle = () => {}}: IToggleProps) {
    return (
        <label className={`${padded ? "padded" : ""} toggle`}>
            <input type="checkbox" style={{display: "none"}} checked={toggled === "on"} onChange={() => onToggle()} />
            <Icon icon={Icons[toggled]} color={color}/>
        </label>
    );
}
