package com.raspa.propertymanagementbackend.services.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.mail.MailSender;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MailServiceImpl {

    private final MailSender mailSender;

    public void sendMessage(SimpleMailMessage simpleMailMessage){
        this.mailSender.send(simpleMailMessage);
    }

}
