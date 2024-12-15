# Dataset Creator React App

Simple app used to create entries for our dataset.

The workflow should be the following:
-insert the initial (correct text)
-make modiifcations (one by one) and click on the record modification button
-copy the entry created and include it in the dataset


This is the format of the entries

      "text": "Pe vremea cand eram mai tanar si m-ai influenţabil, tata mia dat un sfat care de atunci mi-a rămâs mereu prezent în minte. —Ori de câte ori a-i poftă să vei critica pe cineva, mi-a spus, tine seama că nu toţi oameni au avantajele de care teai bucurat tu.",
      
      "edits": {
      
        "start": [11, 25, 34, 58, 94, 141, 154, 188, 210, 217, 239],
        
        "end": [15, 30, 38, 61, 99, 144, 165, 192, 216, 219, 243],
        
        "text": ["când", "tânăr", "mai", "m-ai", "rămas", "ai", "critici", "ține", "oamenii", "au avut", "te-ai"]
        
      }


# Install and Use the App
clone the repo and go to dataset_creator/

execute either `npm ci` or `npm i`

and do a simple npm run start

note that we used react@18
