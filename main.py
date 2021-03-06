import frida
import sys
import time
import os

def read(path):
    with open(path, "r") as f:
        return f.read()


device = frida.get_usb_device()
pid = device.spawn(["com.kakao.talk"])
session = device.attach(pid)
script = session.create_script(read("script.js"))

script.load()

time.sleep(1)
device.resume(pid)
sys.stdin.read()
