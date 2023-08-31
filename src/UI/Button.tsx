import React, {ReactNode} from "react";
import styled from "styled-components";
import colors from "@/constants/colors.ts";

enum ButtonTypes {
    primary = 'primary',
    secondary = 'secondary',
    ghost = 'ghost',
    danger = 'danger'
}

interface IButtonProps {
    type?: ButtonTypes.primary | ButtonTypes.secondary | ButtonTypes.ghost | ButtonTypes.danger
    children?: ReactNode
    block?: boolean
    disabled?: boolean
    onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

const Button = styled(({
                           block = false,
                           onClick = () => {},
                           type=ButtonTypes.primary,
                           disabled,
                           children,
    ...props
                       }: IButtonProps)=>(
                           <button
                               {...props}
                               type={'button'}
                               onClick={!disabled ? onClick : ()=>{}}
                           >
                               {children}
                           </button>
))`

  user-select: none;
  cursor: ${(p) => p.disabled ? 'not-allowed' : 'pointer'};
  border-radius: 5px;
  display: inline-flex;
  align-items: center;
  width: ${(p) => p.block ? '100%' : 'fit-content'};
  justify-content: ${(p) => p.block ? 'center' : 'initial'};
  font-size: 14px;
  font-weight: 500;
  padding: 10px 22px;
  letter-spacing: 0.36px;

  border: 1px solid ${
    (p) => p.type === 'ghost' ? colors.primary : 'transparent'
};

  background-color: ${(p) => {
    if (p.disabled) return '#c2c2c2'

    switch (p.type) {
        case 'primary': return colors.primary
        case 'secondary': return colors.secondary
        case 'ghost': return 'transparent'
        case 'danger': return colors.danger
        default: return colors.primary
    }
}};

  color: ${(p) => {
    switch (p.type) {
        case 'primary': return '#fff'
        case 'secondary': return '#fff'
        case 'ghost': return colors.primary
        default: return '#fff'
    }
}};


`