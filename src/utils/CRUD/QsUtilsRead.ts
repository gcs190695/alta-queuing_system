import { useSelector } from "react-redux"
import type { reducerTypes } from "../../state/reducers"
import type { DeviceType, ProgressionType, ServiceType, UserRoleType, UserType } from "../../state/data_types"

export const Device = (id: string) => {
  const devices = useSelector((state:reducerTypes) => state.devices)

  return devices.find((device) => device.id === id) as DeviceType
}

export const Service = (id: string) => {
  const services = useSelector((state:reducerTypes) => state.services)

  return services.find((service) => service.id === id) as ServiceType
}

export const Progression = (id: string) => {
  const progressions = useSelector((state:reducerTypes) => state.progressions)

  return progressions.find((progression) => progression.doc_id === id) as ProgressionType
}

export const Account = (id: string) => {
  const accounts = useSelector((state:reducerTypes) => state.users)

  return accounts.find((account) => account.doc_id === id) as UserType
}
export const Role = (id: string) => {
  const roles = useSelector((state:reducerTypes) => state.userRoles)

  return roles.find((role) => role.doc_id === id) as UserRoleType
}