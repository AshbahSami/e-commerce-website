'use client'
import { Card } from "@/components/ui/card";
import { useState } from "react";

interface Post {
  id: number;
  title: string;
  image: string;
  description: string;
}

const posts: Post[] = [
  {
    id: 1,
    title: "Mauris at orci non vulputate diam tincidunt nec.",
    image: "/post1.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
  },
  {
    id: 2,
    title: "Mauris at orci non vulputate diam tincidunt nec.",
    image: "/post2.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
  },
  {
    id: 3,
    title: "Mauris at orci non vulputate diam tincidunt nec.",
    image: "/post3.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
  },
];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedPost, setExpandedPost] = useState<number | null>(null);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleReadMore = (id: number) => {
    setExpandedPost(expandedPost === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        <div className="md:col-span-1 space-y-6 order-1 md:order-2">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-bold text-[#151875]">Search</h2>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-3 border rounded-md text-sm"
              placeholder="Search blog posts..."
            />
          </div>

          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-bold">Categories</h2>
            <ul className="gap-4 mt-4 grid grid-cols-2">
              <Card className="flex px-2 items-center text-[#8A8FB9]">Hobbies <h6 className="font-medium text-[#8A8FB9]">(21)</h6></Card>
              <Card className="flex px-2 items-center text-[#8A8FB9]">Hobbies <h6 className="font-medium text-[#8A8FB9]">(21)</h6></Card>
              <Card className="flex px-2 items-center text-[#8A8FB9]">Hobbies <h6 className="font-medium text-[#8A8FB9]">(21)</h6></Card>
              <Card className="flex px-2 items-center text-[#8A8FB9]">Hobbies <h6 className="font-medium text-[#8A8FB9]">(21)</h6></Card>
              <Card className="flex px-2 items-center text-[#8A8FB9]">Hobbies <h6 className="font-medium text-[#8A8FB9]">(21)</h6></Card>
              <Card className="flex px-2 items-center text-[#8A8FB9]">Hobbies <h6 className="font-medium text-[#8A8FB9]">(21)</h6></Card>
            </ul>
          </div>

          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-bold text-[#151875]">Recent Posts</h2>
            <img src="/recentpost.png" alt="" />
          </div>

          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-bold text-[#151875]">Rsale Product</h2>
            <img src="/saleproduct.png" alt="" />
          </div>

          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-bold text-[#151875]">Offer Product</h2>
            <img src="/offerproduct.png" alt="" />
          </div>

          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-bold text-[#151875]">Follow</h2>
            <img src="/follow.png" alt="" />
          </div>

          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-bold text-[#151875]">Tags</h2>
            <ul className="grid grid-cols-3 gap-1">
              <li className="text-blue-500 px-2 py-4">general</li>
              <li className="text-blue-500 px-2 py-4">general</li>
              <li className="text-blue-500 px-2 py-4">general</li>
              <li className="text-blue-500 px-2 py-4">general</li>
              <li className="text-blue-500 px-2 py-4">general</li>
            </ul>
          </div>
        </div>

        <div className="md:col-span-2 space-y-8 order-2 md:order-1">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <div key={post.id} className="bg-white p-6 shadow-lg rounded-lg">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h2 className="text-2xl font-bold text-[#151875]">{post.title}</h2>
                <p className="text-[#8A8FB9] mt-2">{post.description}</p>
                <button
                  onClick={() => handleReadMore(post.id)}
                  className="text-white px-2 mt-4 inline-block"
                >
                  {expandedPost === post.id ? "Read Less" : "Read More"}
                </button>

                {expandedPost === post.id && (
                  <div className="mt-6 text-[#8A8FB9]">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod ex in urna elementum, eget euismod magna scelerisque. Integer vehicula velit eu nisl facilisis, vitae luctus dui hendrerit. Curabitur tempor, urna a viverra luctus, velit velit facilisis arcu, id vestibulum est dui vel ante. Nam aliquam orci ut orci facilisis, et iaculis mi condimentum. Suspendisse potenti.
                    </p>
                    <img
                      src={post.image}
                      alt={`More about ${post.title}`}
                      className="w-full h-64 object-cover rounded-lg mt-4"
                    />
                  </div>
                )}
              </div>
            ))
          ) : (
            <p>No posts found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
