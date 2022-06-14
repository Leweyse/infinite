import { Link } from '@/components/blocks';

const Nav = () => {
    const links = [
        {
            id: 'repo',
            url: 'https://github.com/Leweyse/infinite',
            content: 'Github',
        },
        {
            id: 'blog',
            url: 'https://github.com/Leweyse/infinite/blob/main/DEVDAIRY.md',
            content: 'Blog',
        },
        {
            id: 'src',
            url: 'https://github.com/Leweyse/infinite/blob/main/README.md',
            content: 'Sources',
        },
        {
            id: 'extra',
            url: 'https://github.com/Leweyse/infinite/blob/main/DEVBOOK.md',
            content: 'Extras',
        },
    ];

    return (
        <nav>
            {links.map((link, idx) => (
                <Link
                    key={idx}
                    id={link.id}
                    link={link.url}
                    content={link.content}
                />
            ))}
        </nav>
    );
};

export default Nav;
