import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import type { Job } from '@/types/job.ts'

const JobTechnologies = ({ technologies }: { technologies: string[] }) => (
  <ul className="flex flex-wrap gap-2">
    {technologies.map((tech) => (
      <li
        key={tech}
        className="rounded-full border border-mist-700 px-3 py-1 font-mono text-xs"
      >
        {tech}
      </li>
    ))}
  </ul>
)

export const Jobs = () => {
  const [jobs, setJobs] = useState<Job[]>([])

  useEffect(() => {
    fetch('/jobs.json')
      .then((response) => response.json() as Promise<Job[]>)
      .then(setJobs)
      .catch((error) => console.error('Error fetching jobs:', error))
  }, [])

  return (
    <section
      id="jobs"
      aria-labelledby="jobs-title"
      className="mx-auto flex w-full max-w-400 flex-col gap-4 px-(--page-gutter) py-12 pb-20 md:mt-24 md:py-12 lg:py-18 xl:py-18"
    >
      <span className="text-primary font-mono text-xs font-normal uppercase">// 02. Carreira</span>
      <h2
        id="jobs-title"
        className="bg-linear-to-r from-[#FFFFFF] to-[#8F8F8F] bg-clip-text font-mono text-4xl font-bold text-transparent md:text-5xl"
      >
        Experiência profissional
      </h2>
      
      <div className="relative mx-auto mt-12 w-full max-w-6xl">
        <span
          aria-hidden="true"
          className="absolute top-2 bottom-2 left-[7px] w-0.5 bg-linear-to-b from-[#555555] via-[#333333] to-[#0A0A0A] md:left-[calc((100%-5rem)/3+2.5rem-1px)]"
        />
        <ol className="flex flex-col gap-12 md:gap-20">
          {jobs.map((job) => (
            <li
              key={job.company}
              className="relative grid grid-cols-[1rem_1fr] gap-x-4 md:grid-cols-[minmax(0,1fr)_1rem_minmax(0,2fr)] md:gap-x-8"
            >
              <div className="col-start-2 row-start-1 flex flex-col items-start md:col-start-1 md:items-end md:text-right">
                <span className="text-primary mb-2 font-mono text-xs font-normal">
                  {job.current ? 'Atualmente' : job.period}
                  {job.current && (
                    <span className="text-muted-foreground"> · desde {job.period}</span>
                  )}
                </span>
                <h3 className="text-primary text-base font-bold lg:text-lg">{job.role}</h3>
                <span className="text-muted-foreground font-mono text-xs">@ {job.company}</span>
              </div>

              <span
                aria-hidden="true"
                className={cn(
                  'bg-primary col-start-1 row-start-1 mt-1 size-4 rounded-full md:col-start-2',
                  job.current && 'shadow-[0_0_0_4px_oklch(0.922_0_0/15%)]',
                )}
              />

              <div className="col-start-2 row-start-2 flex flex-col gap-4 pt-4 md:col-start-3 md:row-start-1 md:pt-0">
                <p className="text-muted-foreground text-sm leading-relaxed font-normal">
                  {job.description}
                </p>
                <JobTechnologies technologies={job.technologies} />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
