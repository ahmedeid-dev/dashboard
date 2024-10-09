import NavButtonWithLabel from "../../components/CircledNavButtonWithLabel/NavButtonWithLabel";

export default function SupervisorManagement() {
    return <>
        <div
            className={`
            flex flex-row flex-wrap
            gap-4
        `}>
            <NavButtonWithLabel route="SupervisorPermissions" label="Supervisors' Permissions" />
            <NavButtonWithLabel route="Supervisors" label="Supervisors" />
        </div>
    </>
}
