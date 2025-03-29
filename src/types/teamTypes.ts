
export interface SocialLinks {
  linkedin?: string;
  twitter?: string;
  github?: string;
  portfolio?: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  socialLinks?: SocialLinks;
}

export interface TeamData {
  [domain: string]: TeamMember[];
}
