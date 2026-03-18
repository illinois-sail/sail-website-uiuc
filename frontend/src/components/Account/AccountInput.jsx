import React from "react";
import "./Account.css";
import { ReactComponent as SpeechSmall } from "../../assets/account/account-speech-sm.svg";
import { ReactComponent as SpeechMedium } from "../../assets/account/account-speech-md.svg";
import { ReactComponent as SpeechLarge } from "../../assets/account/account-speech-lg.svg";

/**
 * @param {string} className - The CSS class name in Account.css for the input container.
 * @param {string} size - Size of speech bubble: 'small', 'medium', or 'large'.
 * @param {string} label - The text in the speech bubble.
 * @param {string} placeholder - The placeholder text for the input.
 * @param {string} inputType - The type of the input.
 * @param {string} enterKeyHint - The enter key hint for the input.
 * @param {function} onKeyDown - The function to handle key down events.
 */
function AccountInput({
  className,
  size = "medium",
  label = "label",
  placeholder = "placeholder",
  inputType = "text",
  enterKeyHint = "next",
  onKeyDown = () => {},
  onChange = () => {},
}) {
  return (
    <div className={className}>
      <div className="accountSpeechWrapper">
        {size === "small" && (
          <SpeechSmall className="accountSpeech" width="10.78vw" />
        )}
        {size === "medium" && (
          <SpeechMedium className="accountSpeech" width="15.61vw" />
        )}
        {size === "large" && (
          <SpeechLarge className="accountSpeech" width="25.79vw" />
        )}
        <span className="accountLabel">{label}</span>
      </div>
      <input
        type={inputType}
        placeholder={placeholder}
        className="accountInput"
        enterKeyHint={enterKeyHint}
        onKeyDown={onKeyDown}
        onChange={onChange}
      />
    </div>
  );
}

export default AccountInput;
