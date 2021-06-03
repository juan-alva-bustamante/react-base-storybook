import React, {ElementType, MouseEventHandler, ReactNode, useState} from 'react';

export type ButtonType = 'default' | 'danger' | 'ghost' | 'secondary';

interface BaseButtonProps {
  type?: ButtonType;
  icon?: ElementType;
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  size?: string
}

type HTMLButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
} & BaseButtonProps;


export type ButtonProps = HTMLButtonProps;

const Button: React.ForwardRefRenderFunction<unknown, ButtonProps> = (props, ref) => {

  const {
    type = 'default',
    className,
    children,
    disabled = false,
    onClick,
  } = props;

  const [isActive, setIsActive] = useState(false);

  return (
    <button onClick={() => setIsActive(!isActive)}>
      Soy un boton {isActive ? 'Activo' : 'No activo'}
    </button>
  );
}

export default React.forwardRef<unknown, ButtonProps>(Button);
