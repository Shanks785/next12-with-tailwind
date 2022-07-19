import { useRouter } from 'next/router'

function PortfolioProjectPage() {
    const router = useRouter()
    console.log(router.query)
    console.log(router.pathname)
    return (
        <div>
            <h1>The Portfolio Projet page</h1>
        </div>
    )
}

export default PortfolioProjectPage