import { AlertDialog, Button, Grid, Text, TextField, Theme, Tooltip } from "@radix-ui/themes";
import { IconButton } from "@radix-ui/themes";
import { ImageIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

export default function PicturesPicker() {
    const [url, setUrl] = useState("");
    const [userImages, setUserImages] = useState([]);

    const fetchUserImages = async () => {
        try {
            const response = await fetch('/api/images');
            const data = await response.json();
            setUserImages(data);
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('/api/images', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ url }),
            });

            if (!response.ok) {
                throw new Error('Failed to save image');
            }

            // Reset the form
            setUrl("");
        } catch (error) {
            console.error('Error saving image:', error);
        }
    };

    useEffect(() => {
        fetchUserImages();
    }, [userImages]);

    return (
      <Theme radius="large">
        <AlertDialog.Root>
          <Tooltip content="Import Pictures">
            <AlertDialog.Trigger>
              <IconButton variant="ghost" size="4">
                <ImageIcon width="22" height="22" />
              </IconButton>
            </AlertDialog.Trigger>
          </Tooltip>
          <AlertDialog.Content>
            <AlertDialog.Title className="flex items-center space-x-4">
              <ImageIcon width="22" height="22" />
              <span className="text-lg font-semibold">Import Pictures</span>
            </AlertDialog.Title>
            <AlertDialog.Description>
              Enter the URL of the image you want to import.
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
              columns={"3"}
              gap="2"
              className="mt-4"
              >
              {userImages.map((image: any) => (
                  <img src={image.url} alt="User Image" className="w-full h-auto rounded-lg" />
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