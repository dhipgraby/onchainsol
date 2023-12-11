import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export function renderIcon(icon: any, color: string) {
    return <FontAwesomeIcon className={`${color} text-5xl`} icon={icon} />
}

export function renderTitle(title: string) {
    return <h3 className="text-xl text-gray-200 p-2">
        {title}
    </h3>
}
