export enum Role {
  Student = "STUDENT",
  Instructor = "INSTRUCTOR",
  Admin = "ADMIN"
}

export const ROLE_HIERARCHY: Readonly<Record<Role, number>> = {
  [Role.Student]: 10,
  [Role.Instructor]: 50,
  [Role.Admin]: 100
};
