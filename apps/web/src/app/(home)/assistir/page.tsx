"use client";

import { Toggle } from "@ui/components/ui/toggle";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import { PSmall } from "../../../../../../packages/ui/src/components/typography";
import { VideosSection } from "./_components/videosSection/videosSection"; // Supõe-se que VideosSection é importado corretamente
import { useAssistirController } from "./useAssistirController";

const WatchVideo: React.FC = () => {
  const {
    isPending,
    video,
    videoRef,
    likeCount,
    dislikeCount,
    toggleLike,
    toggleDislike,
  } = useAssistirController();

  return (
    <div>
      {isPending || !video ? (
        <div>Loading...</div>
      ) : (
        <div className="flex gap-4 h-full">
          <div className="h-full">
            <video ref={videoRef} width="1920" height="1080" controls>
              <source src={video.publicURL} type="video/mp4" />
            </video>
            <div className="flex flex-col gap-2 bg-black/0 p-4 mt-4 rounded-lg shadow-lg border border-gray-800 text-white">
              <span className="text-lg font-semibold">{video.fileName}</span>
              <div className="flex gap-4 items-center justify-end text-sm">
                <span>Visualizações: {video.views}</span>
                <Toggle variant={"like"} onClick={toggleLike}>
                  <ThumbsUp />
                  <PSmall className="ml-4">{likeCount}</PSmall>
                </Toggle>
                <Toggle variant={"default"} onClick={toggleDislike}>
                  <ThumbsDown />
                  <PSmall className="ml-4">{dislikeCount}</PSmall>
                </Toggle>
                <span>
                  Data de envio:{" "}
                  {new Date(video.uploadedAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
          <VideosSection />
        </div>
      )}
    </div>
  );
};

export default WatchVideo;
