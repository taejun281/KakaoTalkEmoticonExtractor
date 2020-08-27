from PIL import Image

def decode(arr, path):
	i=Image.new("RGBA", (360,360))
	count=0
	for y in range(0, 360):
		for x in range(0, 360):
			color=arr[count]
		
			a = (color >> 24) & 255;
			r = (color >> 16) & 255;
			g = (color >> 8) & 255;
			b = color & 255;
		
			i.putpixel((x,y), (r,g,b,a))
			count+=1
	i.save(path)
