import { type Project, type Skill } from "@shared/schema";

export interface IStorage {
  // Static site - just placeholder methods if needed
  getProjects(): Promise<Project[]>;
}

export class MemStorage implements IStorage {
  private projects: Project[] = [];

  constructor() {
    // Initialize with some static data if needed, though frontend will likely use constants
  }

  async getProjects(): Promise<Project[]> {
    return this.projects;
  }
}

export const storage = new MemStorage();
