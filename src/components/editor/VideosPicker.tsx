import { AlertDialog, Button, Grid, Text, TextField, Theme, Tooltip } from "@radix-ui/themes";
import { IconButton } from "@radix-ui/themes";
import { MagnifyingGlassIcon, VideoIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

export default function VideosPicker() {
    const [url, setUrl] = useState("");
    const [userVideos, setUserVideos] = useState([]);

    const handleSubmit = async () => {
        try {
            const response = await fetch('/api/videos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ url }),
            });

            if (!response.ok) {
                throw new Error('Failed to save video');
            }

            // Reset the form
            setUrl("");
        } catch (error) {
            console.error('Error saving video:', error);
        }
    };

    const fetchUserVideos = async () => {
        try {
            const response = await fetch('/api/videos');
            const data = await response.json();
            setUserVideos(data);
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    };

    useEffect(() => {
        fetchUserVideos();
    }, [userVideos]);

    return (
      <Theme radius="large">
        <AlertDialog.Root>
          <Tooltip content="Import Videos">
            <AlertDialog.Trigger>
              <IconButton variant="ghost" size="4">
                <VideoIcon width="22" height="22" />
              </IconButton>
            </AlertDialog.Trigger>
          </Tooltip>
          <AlertDialog.Content>
            <AlertDialog.Title className="flex items-center space-x-4">
              <VideoIcon width="22" height="22" />
              <span className="text-lg font-semibold">Import Videos</span>
            </AlertDialog.Title>
            <AlertDialog.Description>
              Enter the URL of the video you want to import.
            </AlertDialog.Description>
            <div className="flex flex-col gap-2 mt-4">
              <TextField.Root 
                placeholder="Enter URL" 
                size="2"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              >
                <TextField.Slot>
                  <MagnifyingGlassIcon height="16" width="16" />
                </TextField.Slot>
              </TextField.Root>
            </div>
            <Grid
              className="mt-4 w-96 overflow-y-scroll"
              columns={"2"}
              gap="2"
              >
              {userVideos.map((video: any, index) => (
                <div key={index} className="flex items-center justify-center">
                  <video width="100%" controls>
                    <source src={video.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ))}
              </Grid>
            <div className="flex justify-between mt-8">
              <AlertDialog.Cancel>
                <Button size="2" variant="outline" color="red">
                  Cancel
                </Button>
              </AlertDialog.Cancel>
              <AlertDialog.Action>
                <Button size="2" onClick={handleSubmit}>Done</Button>
              </AlertDialog.Action>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Root>
      </Theme>
    );
}