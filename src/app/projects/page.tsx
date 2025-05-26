"use client";

import React, { useEffect, useState } from "react";

interface Project {
  id: string;
  name: string;
  description: string;
  overview: string;
  imageUrl: string;
  skills: string[];
}

function Page() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("/api/projects");
        if (!res.ok) throw new Error("Failed to fetch projects");
        const data: Project[] = await res.json();
        setProjects(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  if (loading) return <div>Loading projects...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex flex-col border-t border-border-light dark:border-border px-5 sm:px-20 xl:px-52 bg-background min-h-[500px] py-20">
      {projects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        projects.map((project) => (
          <div key={project.id} className="mb-8 border p-4 rounded shadow">
            <h2 className="text-xl font-bold">{project.name}</h2>
            <img
              src={project.imageUrl}
              alt={project.name}
              className="w-full max-w-md my-4"
            />
            <p>{project.description}</p>
            <p className="italic my-2">{project.overview}</p>
            <div>
              <strong>Skills:</strong> {project.skills.join(", ")}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Page;
