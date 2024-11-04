import { Skill } from '../types/types';
import { CssSvg, DjangoSvg, DockerSvg, HtmlSvg, JavaSvg, K8sSvg, PostgresSvg, PythonSvg, ReactSvg, SpringBootSvg, SupabaseSvg, TailwindSvg, TypescriptSvg } from './skills-svgs';

export const skills: Skill[] = [
    {
        name: "React",
        logo: <ReactSvg className='fill-white dark:group-hover:fill-green' />,
        websiteUrl: "https://reactjs.org/",
        description: "A JavaScript library for building user interfaces."
    },
    {
        name: "Java",
        logo: <JavaSvg />,
        websiteUrl: "https://www.oracle.com/java/",
        description: "A high-level, class-based, object-oriented programming language."
    },
    {
        name: "Python",
        logo: <PythonSvg />,
        websiteUrl: "https://www.python.org/",
        description: "A versatile programming language known for its readability and support for multiple programming paradigms."
    },
    {
        name: "Docker",
        logo: <DockerSvg />,
        websiteUrl: "https://www.docker.com/",
        description: "A platform for developing, shipping, and running applications in containers."
    },
    {
        name: "Tailwind CSS",
        logo: <TailwindSvg />,
        websiteUrl: "https://tailwindcss.com/",
        description: "A utility-first CSS framework for rapidly building custom designs."
    },
    {
        name: "Spring Boot",
        logo: <SpringBootSvg />,
        websiteUrl: "https://spring.io/projects/spring-boot",
        description: "An open-source Java-based framework used to create microservices."
    },
    {
        name: "Django",
        logo: <DjangoSvg />,
        websiteUrl: "https://www.djangoproject.com",
        description: "Django is a high-level Python web framework designed for rapid development and clean, pragmatic design. It encourages reusable components and adheres to the DRY (Don't Repeat Yourself) principle."
    },
    {
        name: "Kubernetes",
        logo: <K8sSvg />,
        websiteUrl: "https://kubernetes.io",
        description: "Kubernetes is an open-source container orchestration platform that automates deploying, scaling, and managing containerized applications. It's highly scalable and is used to streamline container management."
    },
    {
        name: "Typescript",
        logo: <TypescriptSvg />,
        websiteUrl: "https://www.typescriptlang.org",
        description: "TypeScript is a typed superset of JavaScript that adds static typing to the language, improving code quality, error checking, and productivity. It compiles to JavaScript and is widely used for large-scale applications."
    },
    {
        name: "PostgreSQL",
        logo: <PostgresSvg />,
        websiteUrl: "https://www.postgresql.org",
        description: "PostgreSQL is a powerful, open-source object-relational database system known for its extensibility, stability, and standards compliance. It’s widely used for handling complex queries and large datasets."
    },
    {
        name: "Supabase",
        logo: <SupabaseSvg />,
        websiteUrl: "https://www.postgresql.org",
        description: "PostgreSQL is a powerful, open-source object-relational database system known for its extensibility, stability, and standards compliance. It’s widely used for handling complex queries and large datasets."
    },
    {
        name: "HTML",
        logo: <HtmlSvg />,
        websiteUrl: "https://en.wikipedia.org/wiki/HTML5",
        description: "HTML5 (Hypertext Markup Language 5) is a markup language used for structuring and presenting hypertext documents on the World Wide Web."
    },
    {
        name: "CSS",
        logo: <CssSvg />,
        websiteUrl: "https://en.wikipedia.org/wiki/CSS",
        description: "Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML."
    }
];