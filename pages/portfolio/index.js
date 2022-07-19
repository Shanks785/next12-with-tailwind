import Link from 'next/link';

function PortfolioPage() {
    const projects = [
        { id: "max", name: "max Pro" },
        { id: "min", name: "min Pro" }
    ]
    return (
        <div>
            <h1>Portfolio</h1>
            <p>This is the Portfolio page</p>
            <ul>
                {projects.map(project => 
                    <li key={project.id}>
                        <Link href={`/portfolio/${project.id}`} >{project.name}</Link>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default PortfolioPage