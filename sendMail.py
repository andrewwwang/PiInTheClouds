import smtplib
import string
import sys

def send_email(subject, to_addr, from_addr, body_text):


	server = smtplib.SMTP('smtp.gmail.com', 587)
	server.starttls()
	server.login("andrewwwang10@gmail.com", "bogeyorparismyDAD!")
	

	msg = string.join(("From: %s" % from_addr, "To: %s" % to_addr, "Subject: %s" % subject, "", body_text), "\r\n")
	server.sendmail(from_addr, to_addr, msg)
	server.quit()

if __name__ == "__main__":
	subject = "Andrew's test email"
	to_addr = "4255907387@tmomail.net"
	from_addr = "andrewwwang10@gmail.com"
	body_text = sys.argv[1]
	send_email(subject, to_addr, from_addr, body_text)

