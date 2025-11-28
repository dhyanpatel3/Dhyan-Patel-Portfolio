import React from 'react';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  dates: string;
  imageUrl?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description?: string;
}

export interface SocialLink {
  name: string;
  username: string;
  url: string;
  icon: React.ElementType;
  color: string;
  bg: string;
}

export interface TechItem {
  name: string;
  iconUrl: string;
}