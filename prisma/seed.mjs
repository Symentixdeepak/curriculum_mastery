import { PrismaClient, Role } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  // Admin user
  const adminEmail = process.env.SEED_ADMIN_EMAIL || 'admin@example.com'
  const adminPassword = process.env.SEED_ADMIN_PASSWORD || 'Admin@123'

  const passwordHash = await bcrypt.hash(adminPassword, 10)

  const admin = await prisma.user.upsert({
    where: { email: adminEmail },
    update: { role: Role.ADMIN },
    create: {
      email: adminEmail,
      name: 'Admin',
      passwordHash,
      role: Role.ADMIN,
    },
  })

  // Music Curriculum Course
  const course = await prisma.course.upsert({
    where: { slug: 'ib-igcse-music-educators-course' },
    update: {},
    create: {
      title: 'IB & IGCSE Music Educators Course',
      slug: 'ib-igcse-music-educators-course',
      description: 'Master the Skills to Teach IB & IGCSE Music with Confidence. Get hands-on tools, expert guidance, and curriculum support designed for IB/IGCSE music teachers.',
      price: 49900,
      currency: 'INR',
      modules: {
        create: [
          {
            title: 'Curriculum Foundations',
            order: 1,
            lessons: {
              create: [
                {
                  title: 'Understanding IB Music Curriculum Structure',
                  order: 1,
                  resources: {
                    create: [
                      {
                        type: 'PDF',
                        fileKey: 'resources/foundations/ib-curriculum-structure.pdf',
                        filename: 'ib-curriculum-structure.pdf',
                        size: 256000,
                      },
                    ],
                  },
                },
                {
                  title: 'IGCSE Music Assessment Framework',
                  order: 2,
                  resources: {
                    create: [
                      {
                        type: 'PDF',
                        fileKey: 'resources/foundations/igcse-assessment-framework.pdf',
                        filename: 'igcse-assessment-framework.pdf',
                        size: 198000,
                      },
                    ],
                  },
                },
                {
                  title: 'Comparative Analysis: IB vs IGCSE',
                  order: 3,
                },
              ],
            },
          },
          {
            title: 'Teaching Methodologies',
            order: 2,
            lessons: {
              create: [
                {
                  title: 'Active Learning Strategies in Music Education',
                  order: 1,
                },
                {
                  title: 'Technology Integration in Music Classrooms',
                  order: 2,
                  resources: {
                    create: [
                      {
                        type: 'PDF',
                        fileKey: 'resources/methodology/tech-integration-guide.pdf',
                        filename: 'tech-integration-guide.pdf',
                        size: 312000,
                      },
                    ],
                  },
                },
                {
                  title: 'Differentiated Instruction for Diverse Learners',
                  order: 3,
                },
                {
                  title: 'Project-Based Learning in Music',
                  order: 4,
                },
              ],
            },
          },
          {
            title: 'Assessment & Evaluation',
            order: 3,
            lessons: {
              create: [
                {
                  title: 'Formative Assessment Techniques',
                  order: 1,
                },
                {
                  title: 'Summative Assessment Design',
                  order: 2,
                },
                {
                  title: 'Rubric Development for Music Performance',
                  order: 3,
                  resources: {
                    create: [
                      {
                        type: 'PDF',
                        fileKey: 'resources/assessment/performance-rubrics.pdf',
                        filename: 'performance-rubrics.pdf',
                        size: 145000,
                      },
                    ],
                  },
                },
                {
                  title: 'Portfolio Assessment Strategies',
                  order: 4,
                },
              ],
            },
          },
          {
            title: 'Practical Implementation',
            order: 4,
            lessons: {
              create: [
                {
                  title: 'Lesson Planning Templates',
                  order: 1,
                  resources: {
                    create: [
                      {
                        type: 'DOCX',
                        fileKey: 'resources/implementation/lesson-plan-templates.docx',
                        filename: 'lesson-plan-templates.docx',
                        size: 89000,
                      },
                    ],
                  },
                },
                {
                  title: 'Classroom Management for Music Teachers',
                  order: 2,
                },
                {
                  title: 'Parent and Student Communication',
                  order: 3,
                },
                {
                  title: 'Professional Development Planning',
                  order: 4,
                },
              ],
            },
          },
          {
            title: 'Advanced Topics',
            order: 5,
            lessons: {
              create: [
                {
                  title: 'Cross-Curricular Integration',
                  order: 1,
                },
                {
                  title: 'Music Theory Pedagogy',
                  order: 2,
                },
                {
                  title: 'Performance Preparation Strategies',
                  order: 3,
                },
                {
                  title: 'Music History Teaching Methods',
                  order: 4,
                },
                {
                  title: 'Composition and Creativity in the Classroom',
                  order: 5,
                },
              ],
            },
          },
        ],
      },
      assignments: {
        create: [
          {
            title: 'Curriculum Analysis Project',
            description: 'Analyze and compare IB and IGCSE music curricula, identifying key differences and teaching strategies for each.',
          },
          {
            title: 'Lesson Plan Portfolio',
            description: 'Create a comprehensive portfolio of 5 lesson plans incorporating different teaching methodologies.',
          },
          {
            title: 'Assessment Design Challenge',
            description: 'Design a complete assessment framework for a music unit, including formative and summative components.',
          },
          {
            title: 'Technology Integration Proposal',
            description: 'Develop a proposal for integrating technology tools into music education, with practical implementation steps.',
          },
        ],
      },
    },
    include: { modules: true },
  })

  console.log('Seed completed:', { admin: { email: admin.email }, course: { slug: course.slug } })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
