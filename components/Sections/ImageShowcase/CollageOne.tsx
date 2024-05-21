import React from "react";

export default function CollageOne() {
  return (
    <div className="mx-auto max-w-5xl">
      {" "}
      <div className="grid grid-cols-5 lg:grid-cols-5 gap-2  ">
        <div className="flex justify-center items-center col-span-3 lg:col-span-2">
          <img
            src="https://images.unsplash.com/photo-1541845157-a6d2d100c931?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
            alt=""
            className="w-full h-72 object-cover rounded-md"
          />
        </div>
        <div className="flex justify-center items-center  col-span-2 lg:col-span-1">
          <img
            src="https://images.unsplash.com/photo-1588282322673-c31965a75c3e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1351&amp;q=80"
            alt=""
            className="w-full h-72 object-cover rounded-md"
          />
        </div>
        {/* Tall Image */}
        <div className="hidden lg:flex justify-center items-center row-span-2 col-span-2">
          <img
            src="https://images.unsplash.com/photo-1588117472013-59bb13edafec?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
            alt=""
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="flex justify-center items-center col-span-2 lg:col-span-1">
          <img
            src="https://images.unsplash.com/photo-1587588354456-ae376af71a25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt=""
            className="w-full h-72 object-cover rounded-md"
          />
        </div>
        <div className="flex justify-center items-center col-span-3 lg:col-span-2">
          <img
            src="https://images.unsplash.com/photo-1541187714594-731deadcd16a?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=700&amp;q=80"
            alt=""
            className="w-full h-72 object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
