import { ReactNode } from "react";
import { TouchableOpacity } from "react-native";

interface IconButtonProps {
  icon: ReactNode;
  onPress: () => void;
  className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onPress,
  className,
}) => (
  <TouchableOpacity onPress={onPress} className={className}>
    {icon}
  </TouchableOpacity>
);

export default IconButton;
