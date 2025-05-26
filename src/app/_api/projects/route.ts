import { NextRequest, NextResponse } from "next/server";
import dbConnect from "./../../_lib/mongoose";
import Project, { IProject } from "./../../_models/Project";

export async function POST(request: NextRequest) {
  await dbConnect();

  try {
    const body = await request.json();

    const { id, name, description, overview, imageUrl, skills } = body;

    if (
      !id ||
      !name ||
      !description ||
      !overview ||
      !imageUrl ||
      !Array.isArray(skills)
    ) {
      return NextResponse.json(
        { message: "Missing or invalid fields" },
        { status: 400 }
      );
    }

    const existing = await Project.findOne({ id });
    if (existing) {
      return NextResponse.json(
        { message: `Project with id ${id} already exists` },
        { status: 409 }
      );
    }

    const newProject = new Project({
      id,
      name,
      description,
      overview,
      imageUrl,
      skills,
    });

    await newProject.save();

    return NextResponse.json(
      { message: "Project added", project: newProject },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: "Error saving project", error: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  await dbConnect();

  try {
    const projects = await Project.find();
    return NextResponse.json({ projects }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Error fetching projects", error: error.message },
      { status: 500 }
    );
  }
}
