import React from 'react'
import Tag from '@/components/Tag'
import Link from '@/components/Link'

export const PostCard = ({ slug, date, title, summary, tags, heroImage }) => (
  <li className="duration-500 ease-in-out hover:scale-[102.5%] hover:transform">
    <article>
      <Link className="" href={`/blog/${slug}`}>
        <img
          className="h-[12rem] w-full rounded-lg object-cover"
          src={`./static/images/${heroImage}`}
        />
        <div className="mt-4 mb-3 flex gap-x-2">
          {tags?.map((tag) => (
            <Tag text={tag} />
          ))}
        </div>
        <h3 className="mb-1 font-bold">{title}</h3>
        <p>{summary}</p>
      </Link>
    </article>
  </li>
)
