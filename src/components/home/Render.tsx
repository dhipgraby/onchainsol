import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export function renderIcon(icon: any, color: string) {
    return <FontAwesomeIcon className={`${color} text-3xl`} icon={icon} />
}

export function renderTitle(title: string) {
    return <h3 className="text-lg p-2 font-normal">
        {title}
    </h3>
}
