import { ItemMenuWrapper } from "./styles";

export const ItemMenu = ({ icon:Icon, label, path }) => (
    <ItemMenuWrapper>
        <Icon />
        <p>{label}</p>
    </ItemMenuWrapper>
)