import InView from "./ui/InView";
import LazyImage from "./LazyImage";
import { GALLERY_IMAGES } from "../../../utils/imageUtils";
import { Suspense } from "react";

const InViewImagesGrid = () => {
  return (
    <div className="h-full w-full overflow-auto">
      <div className="mb-20 py-2 text-center text-sm text-green-700"></div>
      <div className="flex h-full items-end justify-center pb-12">
        <InView
          viewOptions={{ once: true, margin: "0px 0px -250px 0px" }}
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.09,
              },
            },
          }}
        >
          <div className="columns-1 gap-4 px-8 sm:columns-3 h-full">
            {GALLERY_IMAGES.map((imgSrc, index) => (
              <Suspense 
                key={index} 
                fallback={
                  <div className="mb-4 w-full h-48 bg-gray-200 rounded-lg animate-pulse" />
                }
              >
                <LazyImage src={imgSrc} index={index} />
              </Suspense>
            ))}
          </div>
        </InView>
      </div>
    </div>
  );
};

const MultiImg = () => {
  return (
    <div className="min-h-screen bg-green-50">
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-5xl font-semibold text-green-800 mb-2 text-center">
              Conference Highlights
            </h2>
            <p className="text-gray-700 text-center">
              Explore the memorable moments from our recent conference and
              publications.
            </p>
          </div>
          <InViewImagesGrid />
        </div>
      </main>
    </div>
  );
};

export default MultiImg;