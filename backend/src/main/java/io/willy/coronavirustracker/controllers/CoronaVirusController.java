package io.willy.coronavirustracker.controllers;

import io.willy.coronavirustracker.model.LocationStats;
import io.willy.coronavirustracker.service.CoronaVirusDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;

@CrossOrigin("http://localhost:3000")
@RestController
public class CoronaVirusController {

    @Autowired
    CoronaVirusDataService coronaVirusDataService;

    @GetMapping("/api/v1/corona-virus-data")
    public List<LocationStats> getCoronaVirusData() throws IOException, InterruptedException {
        return coronaVirusDataService.getAllStats();
    }
}
