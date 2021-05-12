def printVal(callId):
  print(f"プリントするのは{callId}ですね。")

def calc(val,height, printVal):
  printVal(val * height)

calc( 2 , 3, printVal)
