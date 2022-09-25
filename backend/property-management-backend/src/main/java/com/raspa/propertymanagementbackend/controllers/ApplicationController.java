package com.raspa.propertymanagementbackend.controllers;

import com.raspa.propertymanagementbackend.entities.DTOs.ApplicationDTO;
import com.raspa.propertymanagementbackend.services.ApplicationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/applications")
@RequiredArgsConstructor
public class ApplicationController {
    private final ApplicationService applicationService;

    @GetMapping
    public List<ApplicationDTO> findAll(){
    return applicationService.findAll();
    }

    @GetMapping("/{id}")
    public ApplicationDTO findById(@PathVariable Long id){
        return applicationService.findById(id);
    }

    @PostMapping
    public ApplicationDTO save(@RequestBody ApplicationDTO applicationDTO){
        return applicationService.save(applicationDTO);

    }

    @PutMapping("/{id}")
    public ApplicationDTO update(@PathVariable Long id, @RequestBody ApplicationDTO payload){
        return applicationService.update(id,payload);
    }
    @DeleteMapping("/{id}")
    public ApplicationDTO delete(@PathVariable Long id){
        return applicationService.delete(id);
    }

 //    Owners can display all applications and filter them
//    by property,
//    by submission date,
//    by location.










}
