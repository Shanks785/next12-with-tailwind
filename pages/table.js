import Cards from "../components/Cards"

const dummyData = [
    {
        id: 1,
        title: "Naruto",
        description: "Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It is serialized in Shonen Jump, and is part of the Naruto manga series. The story follows the life of Naruto Uzumaki, a young ninja who struggles to become a full-fledged member of the ninja order.",
    },
    {
        id: 2,
        title: "One Piece",
        description: "One Piece is a Japanese manga series written and illustrated by Eiichiro Oda. It is serialized in Weekly Shonen Jump, and is part of the One Piece manga series. The story follows the adventures of Monkey D. Luffy, a poor thief who is trying to steal the treasure of the pirate king, who is the king of the Pirates.",
    },
    {
        id: 3,
        title: "Bleach",
        description: "Bleach is a Japanese manga series written and illustrated by Eiichiro Oda. It is serialized in Weekly Shonen Jump, and is part of the Bleach manga series. The story follows the adventures of Ichigo Kurosaki, a 17-year-old ninja who is trying to become a full-fledged ninja.",
    }
]
export default function Table() {
    return (
        <div className='flex flex-col items-center justify-center w-full h-screen'>
            <div className="flex items-center">
                <Cards text='Naruto' />
                <Cards text='Uchiha' />
            </div>
            <table className="md:table-fixed">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {dummyData.map(data => (
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.title}</td>
                            <td>{data.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}