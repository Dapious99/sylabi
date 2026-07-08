export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
  socials?: {
    twitter?: string;
    facebook?: string;
    linkedin?: string;
  };
};

export const team: TeamMember[] = [
  {
    name: "Ugwu Daniel Tochukwu",
    role: "Co-founder & CEO",
    bio: "Leads Sylabi's vision, strategy and partnerships. Started Sylabi to make sure no student is tested on material they were never taught.",
    image: "/team-tunde.jpg",
    socials: {
      twitter: "https://x.com/deyunblackboi",
      facebook: "https://www.facebook.com/daniel.tochukwu.129/",
      linkedin: "https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav",
    },
  },
  {
    name: "Adaeze Okafor",
    role: "Co-founder & CTO",
    bio: "Former student union academic secretary. Ran the original 'syllabus spreadsheet' that Sylabi grew out of. Leads product and university partnerships.",
    image: "/team-adaeze.jpg",
  },
];
