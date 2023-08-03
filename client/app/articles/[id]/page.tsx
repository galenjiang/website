import { getAllArticles, getArticle } from "@/utils"
import dayjs from "dayjs"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
    const articles = await getAllArticles()

    return articles.map(article => ({
        id: article.name
    }))
}

export default async function Page({ params }: { params: { id: string } }) {
    console.log('render page')
    
    const { content, frontmatter } = await getArticle(params.id)
    return <article className="prose md:prose-lg lg:prose-xl xl:prose-xl 2xl:prose-2xl prose-neutral mx-auto">
        <header className="text-6xl text-center font-bold leading-loose">{frontmatter.title}</header>
        <div className="mb-6">{dayjs(frontmatter.date).format('YYYY-MM-DD')}</div>
        <div className="mb-6">{frontmatter.description}</div>
        {content}
    </article>
}