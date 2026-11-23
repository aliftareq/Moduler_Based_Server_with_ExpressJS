export interface IProfile {
  user_id: number;
  bio?: string | null;
  address?: string | null;
  phone?: string | null;
  gender?: "male" | "female" | "other";
}
