import React from "react";
import { InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import MuiTextField from "@mui/material/TextField";
import { getIn } from "formik";
import { useMemo } from "react";
import useToggle from "../../../hooks/useToggle";

const TextField = ({
  field,
  form,
  variant,
  size,
  iconStartInput,
  sx,
  iconEndInput,
  onChangeCustomize,
  afterOnChange,
  onClickEndAdornment,
  sxEndAdornment,
  type = "text",
  isFormatNumber,
  disabled = false,
  ...props
}) => {
  const { name, value, onBlur, onChange } = field || {};
  const { errors, touched } = form || {};
  const isTouched = getIn(touched, name);
  const errorMessage = getIn(errors, name);
  const { show: showPassword, toggle: togglePassword } = useToggle();

  const typePassword = useMemo(() => {
    return showPassword ? "text" : "password";
  }, [showPassword]);

  const handleMouseDown = (event) => {
    event.preventDefault();
  };

  return (
    <MuiTextField
      type={type === "password" ? typePassword : type}
      name={name}
      value={value}
      onBlur={onBlur}
      onChange={(e) => {
        if (onChangeCustomize) {
          onChangeCustomize(e.target.value);
          return;
        }

        onChange && onChange(e);
        afterOnChange && afterOnChange(e.target.value);
      }}
      error={isTouched && Boolean(errorMessage)}
      helperText={isTouched && errorMessage}
      variant={variant}
      size={size}
      sx={{
        [`input[type='password']::-ms-reveal,input[type='password']::-ms-clear`]:
          {
            display: "none",
          },
        "& div": {
          borderRadius: "0.5rem",
        },
        "& label": {},
        "& input": {
          padding: "10px 15px",
        },
        ...sx,
      }}
      InputProps={{
        startAdornment: iconStartInput ? (
          <InputAdornment position="start" className="icon-start-input">
            {iconStartInput}
          </InputAdornment>
        ) : undefined,
        endAdornment: iconEndInput ? (
          <InputAdornment
            position="end"
            sx={sxEndAdornment || {}}
            onClick={onClickEndAdornment || undefined}
          >
            {iconEndInput}
          </InputAdornment>
        ) : type === "password" ? (
          <InputAdornment position="end">
            <IconButton
              onClick={togglePassword}
              onMouseDown={handleMouseDown}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ) : undefined,
      }}
      InputLabelProps={{
        shrink: true,
      }}
      disabled={disabled}
      {...props}
    />
  );
};

export default TextField;
