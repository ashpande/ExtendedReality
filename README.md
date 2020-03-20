# ExtendedReality
Inspired by Pranav Mistry's sixth sense project. Uses Raspberry Pi, Raspicam, Machine Learning, OCR and CV to make a gesture controlled computer.

# The problem Extended Reality solves
Computers can be surprisingly unintuitive for the non technologically savvy. Gone are the days of heavy menu based interfaces, simple, gesture based systems rule the roost now. Examples being mobile phones, which now don't have buttons, don't even have home screen icons but rely on a series of gestures to get things done.

Extending the same concept to computing in general, we thought, why not get rid of the screen entirely? With Extended Reality, you can turn any surface into an object to be interacted with. With a simple gesture of your hands you can click a picture, with a glance you can scan any document that you are holding. All on the go, with a small projector and camera that you can hang around your neck.

# Challenges we ran into
We were using a system with extremely limited memory and compute power - The Raspberry Pi 4B which has an outdated processor by today's standards and a measly 2 GB of RAM. On top of that, the ARM processor meant that most of the libraries such as OpenCV 4.0, Tesseract OCR, Pytorch etc had to be compiled from source. This was also a really slow and error prone process.

Integrating the different technologies involved occasionally overwhelmed the processor, but we found workarounds by disabling certain features of libraries that were not required.

# Examples and UI

Video: https://www.youtube.com/watch?time_continue=50&v=8u3bYXxyju4&feature=emb_title

![Hardware Setup](https://github.com/AshutoshPandey123456/ExtendedReality/blob/master/HBB1.JPG)

![Snapshot](https://github.com/AshutoshPandey123456/ExtendedReality/blob/master/HBB2.JPG)

