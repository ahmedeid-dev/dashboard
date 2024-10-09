import NavButtonWithLabel from "../../components/CircledNavButtonWithLabel/NavButtonWithLabel";

export default function UserManagement() {
    return <>
        <div
            className={`
            flex flex-row flex-wrap m-4
            gap-4
        `}>
            <NavButtonWithLabel route="User" label="User" />
            <NavButtonWithLabel route="UserPermissions" label="Users' Permissions" />
        </div>
    </>
}
