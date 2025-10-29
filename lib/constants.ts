export interface Event {
  id: string;
  title: string;
  slug: string;
  image: string;
  date: string;
  time: string;
  location: string;
}

export const events: Event[] = [
  {
    id: "1",
    title: "Next.js Conference 2026",
    slug: "nextjs-conference-2026",
    image: "/images/event1.png",
    date: "January 15-16",
    time: "9:00 AM - 6:00 PM",
    location: "San Francisco, CA",
  },
  {
    id: "2",
    title: "Global Hackathon Summit",
    slug: "global-hackathon-summit",
    image: "/images/event2.png",
    date: "March 8-10",
    time: "10:00 AM - 8:00 PM",
    location: "London, UK",
  },
  {
    id: "3",
    title: "React Summit 2026",
    slug: "react-summit-2026",
    image: "/images/event3.png",
    date: "April 21-23",
    time: "9:30 AM - 5:30 PM",
    location: "Amsterdam, Netherlands",
  },
  {
    id: "4",
    title: "DevFest 2026",
    slug: "devfest-2026",
    image: "/images/event4.png",
    date: "May 15-16",
    time: "10:00 AM - 7:00 PM",
    location: "Berlin, Germany",
  },
  {
    id: "5",
    title: "AI & ML Developer Meetup",
    slug: "ai-ml-developer-meetup",
    image: "/images/event5.png",
    date: "June 5",
    time: "6:00 PM - 9:00 PM",
    location: "New York, NY",
  },
  {
    id: "6",
    title: "Web Development Summit",
    slug: "web-development-summit",
    image: "/images/event6.png",
    date: "July 10-12",
    time: "9:00 AM - 6:30 PM",
    location: "Toronto, Canada",
  },
];
