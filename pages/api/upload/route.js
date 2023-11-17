import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
cloudinary.config({ 
  cloud_name: 'duha3yo9m', 
  api_key: '188879924249237', 
  api_secret: 'r1GNKCCsW03NUGitpoV0E7q9yPM' 
});
export async function POST(request) {
  const data = await request.formData();
  const image = data.get("image");
  if (!image) {
    return NextResponse.json("no se ha subido ninguna imagen", { status: 400 });
  }
  const bytes = await image.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const response = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({}, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      })
      .end(buffer);
  });
  console.log(response.secure_url)
  return NextResponse.json({
    message: "imagen subida",
    url: response.secure_url,
  });
}