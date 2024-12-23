import { Card, Heading, Text, Button } from "@radix-ui/themes";
import { Dialog, DialogTrigger, DialogContent, DialogClose } from "@radix-ui/react-dialog";
// import { useState } from "react";
import image1 from "../assets/data-ana.jpeg"
import image2 from "../assets/full_dev.jpeg"

export default function BodyTech() {
  return (
    <main className="bg-white">
      {/* About Us Section */}
      <div className="mx-auto px-4 my-10">
        <Heading
          size={{ initial: "6", md: "8" }}
          className="mb-8 text-blue-500"
          align={"center"}
        >
          Welcome to 5AMAS Technology
        </Heading>
        <div className="mx-auto md:max-w-3xl text-center text-lg text-gray-600">
          <Text align={"center"} size={"2"}>
            The 5amas Technologies Ltd cater to the information, communication,
            and entertainment needs of global business houses to SMEs, as well
            as millions of consumers. We aspire to be a driving force behind
            West African digital transformation. Our mission is to empower
            businesses and individuals with world-class telecommunications
            solutions rendering quality services.
          </Text>
        </div>
      </div>
      <Courses />
    </main>
  );
}

function Courses() {
  const courses = [
    {
      title: "Full Stack Development",
      description:
        "Learn to build robust web applications from scratch using modern technologies.",
      startDate: "January",
      image: `${image2}`,
    },
    {
      title: "Data Analytics",
      description:
        "Master the skills to analyze data and derive actionable insights.",
      startDate: "January",
      image: `${image1}`,
    },
  ];

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container ">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-900">
            Courses We Offer
          </h2>
          <p className="max-w-[900px] text-zinc-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Join our courses starting this January to advance your career in
            technology.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-2 md:gap-12">
          {courses.map((course, index) => (
            <Card key={index} className="w-full hover:shadow-xl transition-shadow duration-300">
              <img src={course.image} alt={course.title} className="rounded-t-lg" />
              <div className="flex flex-col space-y-4 p-4">
                <Heading>{course.title}</Heading>
                <p className="text-zinc-700">{course.description}</p>
                <p className="text-zinc-500">
                  <strong>Start Date:</strong> {course.startDate}
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="solid">Apply Now</Button>
                  </DialogTrigger>
                  <DialogContent className="bg-white p-6 rounded-lg shadow-lg">
                    <Heading size="4">Apply for {course.title}</Heading>
                    <form onSubmit={(e) => handleApply(e, course.title)}>
                      <div className="my-4">
                        <label className="block text-sm font-medium text-gray-700">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full mt-1 p-2 border rounded"
                        />
                      </div>
                      <div className="my-4">
                        <label className="block text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full mt-1 p-2 border rounded"
                        />
                      </div>
                      <div className="my-4">
                        <label className="block text-sm font-medium text-gray-700">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          className="w-full mt-1 p-2 border rounded"
                        />
                      </div>
                      <Button type="submit" variant="solid" className="mt-4">
                        Submit
                      </Button>
                    </form>
                    <DialogClose asChild>
                      <Button variant="ghost" className="mt-4">
                        Close
                      </Button>
                    </DialogClose>
                  </DialogContent>
                </Dialog>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function handleApply(event: React.FormEvent, courseTitle: string) {
  event.preventDefault();
  const form = event.target as HTMLFormElement;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  console.log(`Applying for ${courseTitle}`, data);

  // Replace with actual API call
  fetch("https://api.example.com/apply", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...data, courseTitle }),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log("Application successful:", result);
      alert("Application submitted successfully!");
    })
    .catch((error) => {
      console.error("Error submitting application:", error);
    });
}
