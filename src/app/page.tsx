"use client";

import { BookList } from "@/components/books";
import { Checkbox } from "@/components/forms";
import { LandingLayout } from "@/layouts/landing";
import { IconSearch } from "@tabler/icons-react";

export default function Home() {
  return (
    <LandingLayout>
      <main className="flex-grow py-24">
        <div className="max-w-7xl pb-12 md:pb-20 mx-auto px-4 sm:px-6">
          <h1 className="text-3xl font-bold mb-4">Bookstore</h1>

          <div className="lg:flex gap-8">
            <div className="w-full lg:w-60 flex-shrink-0 mb-4">
              <div className="bg-white rounded border border-slate-200 px-4 lg:divide-y divide-slate-300">
                <div className="py-2 lg:py-4">
                  <h3 className="font-semibold mb-3">Tags</h3>
                  <div className="mb-2">
                    <Checkbox name="test">Test</Checkbox>
                    <Checkbox name="test 2">Test 2</Checkbox>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="relative mb-4">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <IconSearch className="w-4 h-4 text-slate-700" />
                </div>
                <input
                  type="text"
                  // onChange={handleKeyword}
                  placeholder="Search"
                  className="focus:ring-sunglow-500 focus:border-sunglow-500 block w-full pl-9 pr-12 sm:text-sm border-slate-300 rounded-lg"
                />
              </div>

              <BookList />
            </div>
          </div>
        </div>
      </main>
    </LandingLayout>
  );
}
