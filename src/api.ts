/**
 * Интерфейс запусков
 */
export interface LaunchSite {
    site_id: string,
    site_name: string
}

/**
 * Интерфейс ракеты
 */
export interface Rocket {
    rocket_id: string
    rocket_name: string
}

/**
 * Интерфейс основного элемента данных SpaceX
 */
export interface SpaceXItem {
    launch_site: LaunchSite
    rocket: Rocket

    links: {
        mission_patch_small: string
    }

    mission_name: string
    launch_date_utc: string
    details: string
    upcoming: boolean
}