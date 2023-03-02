// array of objects to render on Project.js component
const projects = [
    {
        id: 1,
        link: "https://integral-solutions-beta.herokuapp.com",
        title: "Integral Solutions",
        github: "https://github.com/RodBennett/integral-solutions-fork",
        image: require("./images/integral-solutions.png"),
        desc: "Production level public-facing MERN full-stack built for contract"
    },
    {
        id: 2,
        link: "https://team-handbook.herokuapp.com/",
        title: "Team Handbook",
        github: "https://github.com/dpk5e7/shakespeares-monkeys",
        image: require("./images/team-handbook.png"),
        desc: "MERN fullstack app for company manangers"

    },
    {
        id: 3,
        link: "https://hikamp.herokuapp.com/",
        title: "HiKamp",
        github: "https://github.com/stevecalla/hiKamp",
        image: require("./images/hikamp.png"),
        desc: "REST API fullstack to find campgrounds within National Park Service"

    },

    {
        id: 4,
        link: "https://drewlovato.github.io/project1-nationalparks/",
        title: "National Park",
        github: "https://github.com/drewlovato/project1-nationalparks",
        image: require("./images/nps.png"),
        desc: "Vanilla JS National Park search engine utilizing NPS 3rd Party API"

    },
    {
        id: 5,
        link: "https://rodbennett.github.io/06-weather-app-challenge/",
        title: "Weather Forecast",
        github: "https://github.com/RodBennett/06-weather-app-challenge",
        image: require("./images/weather.png"),
        desc: "App to search 5-day forecast with Open Weather API"

    },
    {
        id: 6,
        link: "https://rb-tech-blog.herokuapp.com/",
        title: "Tech Blog",
        github: "https://github.com/RodBennett/14-Tech-Blog",
        image: require("./images/blog.png"),
        desc: "RESTful Tech Blog with all CRUD methods bult with Handlebars engine"

    }
];

export default projects;