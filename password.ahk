#SingleInstance Force
;Ini Variables
ScreenX := A_ScreenWidth/2
ScreenY := A_ScreenHeight/2
WindowX := 300
WindowY := 150
stallTime := 0 ;Adjust this if computer is too slow to keep up

;Get password
;if for some reason they changed how username works duplicate this line
;change "UserPassword" to a different variable
;then update below the line "clipsend(A_UserName)" changing A_Username to your chosen variable.
InputBox, UserPassword , Enter Password, Enter Password, , WindowX, WindowY, ScreenX-(WindowX/2), ScreenY-(WindowY/2)
return


!f1:: ;change this to whatever you want the hotkey to be, currently Alt+F1
clipsend(A_UserName) ; A_UserName is the logon name of the computer, we are taking advantage of teh fact that yoru usename is your PID
sleep stallTime
send {tab} ;Tab to next input
sleep stallTime
clipsend(UserPassword) ; Variable created by the inputbox
sleep stallTime
send {return}

return

clipsend(vartext){ ;function that preserves clipboard while sending pid and password
    holdClip := ClipboardAll ;stores content of clipboard for later use
    Clipboard:=
    Clipboard:= vartext
    ClipWait 2
    send ^v
    Clipboard:=
    Clipboard:= holdClip ;restores clipboard
    ClipWait 2
}